import Link from "$components/Link.svelte";

export class Trackliner{
    link: HTMLAnchorElement;
    color: string;
    constructor(element : HTMLAnchorElement, color: string,  ) {
        this.link = element;
        this.color = color;
        this.init();
    }

    init() {
        let self = this;
        let linkWidth : number = self.link.offsetWidth
        let svg = self.createSVG(linkWidth);


    }

    
    createSVG(linkWidth) {

    }
}