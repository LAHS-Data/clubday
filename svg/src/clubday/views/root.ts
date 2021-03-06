import * as SVG from "@svgdotjs/svg.js";
import { View } from "../view";
import { canvas, background } from "../app";
import { COLOURS } from "../style";

/**
 * splash screen view
 */
export default class RootView implements View
{
    private title: SVG.Text;

    constructor()
    {
        // create the elements in the constructor otherwise typescript complains
        this.title = canvas
            .text("Club Day")       // create new elements using canvas./* text/rect/etc... */
            .font({                 // use autocomplete for the other properties...             
                family: 'Helvetica',
                size: 40,           // this would also depend on width(), height() or a combination
                anchor: 'middle',
                leading: '1.5em',
            })
            .fill(COLOURS.txt_dark) // .fill() takes any CSS color, hex included
            .x(20)                  // set the absolute position. normally you use some math function with width()
            .y(20)                  // set the absolute position. normally you use some math funciton with height()
            .hide();                // important!!! hide it in the constructor!!
    }

    start(): void
    {
        // request a background size
        background.resize(0.5);

        this.title.show();
    }

    stop(): void
    {
        this.title.hide();
    } 
}