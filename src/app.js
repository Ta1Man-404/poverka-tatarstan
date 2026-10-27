import {Analytics} from "../dist/scripts/analytics.min.js";
import {Header} from "../dist/scripts/header.min.js";
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
        new Lightbox();
        new Fold();
        new YandexMap();
    }
}

(new App());
