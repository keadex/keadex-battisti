import * as Three from 'three';

class TouchManager {
  private isMoving: boolean = false;
  private isButtonPressed: boolean = false;
  public clickHandler: (event: any) => void = () => {};
  public forceGraphInstance: any
  private canvas: any;

  public init() {
    this.getCanvas();

    if (!this.canvas) {
      setTimeout(() => this.init(), 1000);
      return;
    }

    this.listenToTouch();
    this.listenToMove();
  }

  private getCanvas = () => {
    const wrapper: HTMLElement | null = document.getElementById(
      "graph-wrapper"
    );
    const canvasCollection: HTMLCollectionOf<HTMLCanvasElement> | null =
      wrapper && wrapper.getElementsByTagName("canvas");
    this.canvas = canvasCollection && canvasCollection[0];
  };

  private startMove() {
    this.isMoving = true;
  }

  private endMove() {
    this.isMoving = false;
  }

  private listenToTouch() {
    this.canvas.addEventListener(
      "mousedown",
      () => {
        this.endMove();
        this.isButtonPressed = true;
      },
      false
    );

    this.canvas.addEventListener(
      "mouseup",
      (e: MouseEvent) => {
        this.isButtonPressed = false;
        if (!this.isMoving) {
          this.handleClick(e);
        }
      },
      false
    );
    this.canvas.addEventListener(
      "touchend",
      (e: TouchEvent) => {
        if (!this.isMoving) {
          this.handleClick(e);
        }

        this.endMove();
      },
      { passive: false }
    );
  }

  private listenToMove() {
    this.canvas.addEventListener(
      "touchmove",
      () => {
        this.startMove();
      },
      false
    );
    this.canvas.addEventListener(
      "mousemove",
      () => {
        if (this.isButtonPressed) {
          this.startMove();
        }
      },
      false
    );
  }

  private handleClick = (event: MouseEvent | TouchEvent) => {
    let xPosition: number = 0;
    let yPosition: number = 0;

    if (event instanceof MouseEvent) {
      xPosition = event.x;
      yPosition = event.y;
    } else if (event instanceof TouchEvent) {
      xPosition = event.changedTouches[0].clientX;
      yPosition = event.changedTouches[0].clientY;
    }

    var mouse = new Three.Vector2();
    var raycaster = new Three.Raycaster();

    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    mouse.x = (xPosition / window.innerWidth) * 2 - 1;
    mouse.y = -(yPosition / window.innerHeight) * 2 + 1;

    if (this.forceGraphInstance.camera && this.forceGraphInstance.scene) {
      raycaster.setFromCamera(
        new Three.Vector2(mouse.x, mouse.y),
        this.forceGraphInstance.camera()
      );

      const intersects = raycaster
        .intersectObjects(this.forceGraphInstance.scene().children, true)
        .filter(o => ["node"].indexOf((o.object as any).__graphObjType) !== -1); // Check only node objects

      const topObject: any = intersects.length ? intersects[0].object : null;
      const topNode: any = topObject && topObject.__data && topObject.__data;

      if (topNode) {
        this.clickHandler(topNode);
      }
    }
  };
}

export default new TouchManager();