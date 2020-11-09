import type { IProgress } from "../../components/progressbar/progressbar"
import type { Experience, Quote } from "../../model/models";
import { SceneId } from "../app.constants";

export interface StoreState {
    app: AppState;
    bot: BotState;
    aboutMe: AboutMeState;
    counter: CounterState;
}


export interface AppState {
    isAppInitialized: boolean;
    isGAInitialized: boolean;
    menuOpen: boolean;
    spinnerCounter: number;
    previousUrl: string|null;
    navigationOccurred: boolean;
    quotes: Quote[];
}

export interface BotState {
    messages: string[];
}

export interface AboutMeState {
    currentScene: number;
    scenePayload: string|null;
    progress: IProgress[];
    experience: Experience[];
}

export interface CounterState {
    counter: number;
}

export const getDefaultStoreState = () : StoreState => {
    return {
        app: getDefaultAppState(),
        bot: getDefaultBotState(),
        aboutMe: getDefaultAboutMeState(),
        counter: getDefaultCounterState()
    }
};

export const getDefaultAppState =  () : AppState => {
    return {
        isAppInitialized: false,
        isGAInitialized: false,
        menuOpen: false,
        spinnerCounter: 0,
        previousUrl: null,
        navigationOccurred: true,
        quotes: []
    }
};

export const getDefaultBotState =  () : BotState => {
    return {
        messages: []
    }
};

export const getDefaultAboutMeState =  () : AboutMeState => {
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

export const getDefaultCounterState =  () : CounterState => {
    return {
        counter: 0
    }
};