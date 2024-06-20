// @ts-nocheck
import "../../lowcoder/src/index.less";
import "virtual:globals";
import * as sdk from "../../lowcoder";
import {LowcoderAppView} from "../../lowcoder";
import "antd-mobile/es/global/global.css";
import ReactDOM from 'react-dom/client'

export * from "../../lowcoder";

window.$lowcoder_sdk = sdk;

class WcScreenRenderer extends HTMLElement {
    static readonly observedAttributes = ['app-id', 'base-url', 'input'];

    container: HTMLElement;
    root: ReactDOM.Root;

    constructor() {
        super();

        this.container = this;
        this.root = ReactDOM.createRoot(this.container);
    }

    get appId(): string {
        return this.getAttribute('app-id') ?? '';
    }

    set appId(value: string) {
        this.setAttribute('app-id', value);
    }

    get baseUrl(): string {
        return this.getAttribute('base-url') ?? '';
    }

    set baseUrl(value: string) {
        this.setAttribute('base-url', value);
    }

    get input(): string {
        return this.getAttribute('input') ?? '';
    }

    set input(value: string) {
        this.setAttribute('input', value);
    }

    connectedCallback(): void {
        this.#render();
    }

    disconnectedCallback(): void {
        this.root.unmount()
    }

    attributeChangedCallback(name: never, oldValue: never, newValue: never): void {
        this.#render();
    }

    #render(): void {
        let parsedInput = null;
        try {
            parsedInput = JSON.parse(this.input);
        } catch (e) { /* empty */
        }

        this.root.render(<LowcoderAppView
            appId={this.appId}
            baseUrl={this.baseUrl}
            moduleInputs={parsedInput}
            onModuleEventTriggered={(e: never) => this.dispatchEvent(new CustomEvent('moduleEventTriggered', {detail: e}))}
            onModuleOutputChange={(e: never) => this.dispatchEvent(new CustomEvent('moduleOutputChange', {detail: e}))}
        />);
    }

}

customElements.define("screen-renderer", WcScreenRenderer);
