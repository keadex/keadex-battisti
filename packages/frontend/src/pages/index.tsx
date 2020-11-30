import React from 'react';
import BasePageComponent from '../components/base-page-component/base-page-component';
import styles from './index.module.scss';
import { PAGE_ROOT_ID, WHY_KEADEX_ID, WHATS_KEADEX_ID } from '../core/route.constants';
import { disableScrollIntoView } from '../helper/generic-helper';
import { GetStaticProps } from 'next';
import { wrapper } from '../core/store/store';
import dynamic from 'next/dynamic'
import PageLayout from '../components/page-layout/page-layout';
import LazyLoad from 'react-lazyload';

const KeadexPreview = dynamic(() => import('../components/keadex-preview/keadex-preview'));
const WhatsKeadex = dynamic(() => import('../components/whats-keadex/whats-keadex'));
const WhyKeadex = dynamic(() => import('../components/why-keadex/why-keadex'));



//--------------- TYPES
interface HomeState {
  width: number,
  height: number
}


//---------- getStaticProps
export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async ({store}) => {
    return {
      props:{}
    }
  }
);


//--------------- COMPONENT
class Home extends BasePageComponent<any, HomeState> {

  //ATTRS
  
  private formatMessageValues:Record<string, any> = {
    span: (chunks:any) => (<span className='text-brand1'>{chunks}</span>),
    br: ()=>(<br />)
  }

  //FUNCS

  //------------ constructor
  constructor(props:any){
    super(props);
    this.anchorRefs.set(WHY_KEADEX_ID, React.createRef<any>());
    this.anchorRefs.set(WHATS_KEADEX_ID, React.createRef<any>());
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }



  //------------ componentDidMount
  componentDidMount(){
    super.componentDidMount();
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    // this.startWhatsKeadexLoop();
    
    /**
     * The following line is needed because when there is an hash change, Next.js scrolls the body to target
     * element identified by the hash by using "scrollIntoView()".
     * See:
     *    - next.js/packages/next/client/index.tsx
     *    - next.js/packages/next/next-server/lib/router/router.js
     * 
     * This causes an issue on our side because instead of the body, we've a custome root scrollable element (the page)
    */
    // console.log("SCROLL disable scroll")
    disableScrollIntoView([WHY_KEADEX_ID, WHATS_KEADEX_ID], null);
  }

  
  //------------ componentDidUpdate
  componentDidUpdate(prevProps:any, prevState:HomeState, snapshot:any){
    super.componentDidUpdate(prevProps, prevState, snapshot);
  }


  //------------ componentWillUnmount
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  //------------ updateWindowDimensions
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }


  //------------ render
  public render() {
    
    return (
      <PageLayout>
        
        <div className='page-body p-0'>
          {/* COVER */}
          <div className={`${styles["home__section"]} ${styles["home__cover"]} animate__animated animate__fadeIn animate__slow`} id="home-section" >
            <KeadexPreview />
          </div>

          {/* WHY KEADEX */}
          <div id="why-keadex" ref={this.anchorRefs.get(WHY_KEADEX_ID)} className={`${styles["home__section"]} ${styles["home__why-keadex-container"]}`}>
            <LazyLoad height={"100vh"} once scrollContainer={"#"+PAGE_ROOT_ID}>
              <WhyKeadex formatMessageValues={this.formatMessageValues} />
            </LazyLoad>
          </div>

          {/* WHAT IS KEADEX */}
          <div id="whats-keadex" ref={this.anchorRefs.get(WHATS_KEADEX_ID)} className={`${styles["home__section"]} ${styles["home__whats-keadex"]} mt-3 mt-md-6`}>
            <LazyLoad height={"100vh"} once scrollContainer={"#"+PAGE_ROOT_ID}>
              <WhatsKeadex formatMessageValues={this.formatMessageValues} />
            </LazyLoad>
          </div>
        </div>
      </PageLayout>
    );
  }
}

export default Home;