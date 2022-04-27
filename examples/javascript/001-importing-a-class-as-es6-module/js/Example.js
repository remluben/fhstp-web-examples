"use strict";

export default class Export
{
    constructor(element, item)
    {
        this.counter = 1;
        this.element = element;

        if (item !== undefined) {
            this.item = item
        }
        else {
            this.item = {
                id: 1,
                title: 'test'
            }
        }
    }

    hello()
    {
        if (this.element.innerHTML) {
            this.element.innerHTML = this.element.innerHTML + "\n"
        }

        this.element.innerHTML = this.element.innerHTML + '#' + this.counter + ': ' + JSON.stringify(this.item)

        this.counter++;
    }
}