import { IProgress } from "../../components/progressbar/progressbar"
import { Experience, Quote } from "../../model/models";
import { SceneId } from "../app.constants";

export interface IStoreState {
    app: IAppState;
    bot: IBotState;
    aboutMe: IAboutMeState;
    counter: ICounterState;
}


export interface IAppState {
    isAppInitialized: boolean;
    menuOpen: boolean;
    spinnerCounter: number;
    previousUrl: string|null;
    navigationOccurred: boolean;
    quotes: Quote[];
}

export interface IBotState {
    messages: string[];
}

export interface IAboutMeState {
    currentScene: number;
    scenePayload: string|null;
    progress: IProgress[];
    experience: Experience[];
}

export interface ICounterState {
    counter: number;
}

export const getDefaultStoreState = () : IStoreState => {
    return {
        app: getDefaultAppState(),
        bot: getDefaultBotState(),
        aboutMe: getDefaultAboutMeState(),
        counter: getDefaultCounterState()
    }
};

export const getDefaultAppState =  () : IAppState => {
    return {
        isAppInitialized: false,
        menuOpen: false,
        spinnerCounter: 0,
        previousUrl: null,
        navigationOccurred: true,
        quotes: []
    }
};

export const getDefaultBotState =  () : IBotState => {
    return {
        messages: []
    }
};

export const getDefaultAboutMeState =  () : IAboutMeState => {
    return {
        currentScene: 0,
        scenePayload: null,
        progress: [
            {id: SceneId.Education, scene:0, progress: 0, duration: 3000, title: "ABOUT_ME.EDUCATION.TITLE"},
            {id: SceneId.Hobbies, scene:1, progress: 0, duration: 5000, title: "ABOUT_ME.HOBBIES.TITLE"},
            {id: SceneId.Mobile, scene:2, progress: 0, duration: 2000, title: null},
            {id: SceneId.FullStack, scene:3, progress: 0, duration: 2000, title: null},
            {id: SceneId.ITSolutionArchitect, scene:4, progress: 0, duration: 2000, title: null},
            {id: SceneId.CV, scene:5, progress: 0, duration: 200, title: "ABOUT_ME.RESUME.TITLE"}
        ],
        experience: []
    }
};

export const getDefaultCounterState =  () : ICounterState => {
    return {
        counter: 0
    }
};