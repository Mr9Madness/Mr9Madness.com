/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';


import {
  MatchResults,
} from '@stencil/router';


declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface AppHome {

    }

    interface AppProject {
      'match': MatchResults;
    }

    interface AppRoot {

    }
  }


    interface HTMLAppHomeElement extends StencilComponents.AppHome, HTMLStencilElement {}

    var HTMLAppHomeElement: {
      prototype: HTMLAppHomeElement;
      new (): HTMLAppHomeElement;
    };
    

    interface HTMLAppProjectElement extends StencilComponents.AppProject, HTMLStencilElement {}

    var HTMLAppProjectElement: {
      prototype: HTMLAppProjectElement;
      new (): HTMLAppProjectElement;
    };
    

    interface HTMLAppRootElement extends StencilComponents.AppRoot, HTMLStencilElement {}

    var HTMLAppRootElement: {
      prototype: HTMLAppRootElement;
      new (): HTMLAppRootElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'app-home': JSXElements.AppHomeAttributes;
    'app-project': JSXElements.AppProjectAttributes;
    'app-root': JSXElements.AppRootAttributes;
    }
  }

  namespace JSXElements {

    export interface AppHomeAttributes extends HTMLAttributes {

    }

    export interface AppProjectAttributes extends HTMLAttributes {
      'match'?: MatchResults;
    }

    export interface AppRootAttributes extends HTMLAttributes {

    }
  }

  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement
    'app-project': HTMLAppProjectElement
    'app-root': HTMLAppRootElement
  }

  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-project': HTMLAppProjectElement;
    'app-root': HTMLAppRootElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }
