import {Analytics} from "../dist/scripts/analytics.min.js";
import {Header} from "../dist/scripts/header.min.js";
import {LeadForm} from "../dist/scripts/lead-form.min.js";
import {Modal} from "../dist/scripts/modal.min.js";
import {Lightbox} from "../dist/scripts/lightbox.min.js";
import {Fold} from "../dist/scripts/fold.min.js";
import {YandexMap} from "../dist/scripts/map.min.js";

class App {
    constructor() {
        window.addEventListener('DOMContentLoaded', this.initComponents.bind(this));
    }

    initComponents() {
        this.analytics = new Analytics();

        new Header();
        new LeadForm(this.analytics);
        new Modal();
        new Lightbox();
        new Fold();
        new YandexMap();
    }
}

(new App());
