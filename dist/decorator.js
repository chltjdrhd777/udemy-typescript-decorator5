"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Print {
    constructor() {
        this.message = "This works";
    }
    show() {
        console.log(this.message);
    }
}
const a = new Print();
const button = document.getElementById("first");
button.addEventListener("click", a.show.bind(a));
function AutoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjust = {
        configurable: true,
        enumerable: false,
        get() {
            const bounding = originalMethod.bind(this);
            return bounding;
        }
    };
    return adjust;
}
class Print2 {
    constructor() {
        this.message = "This works...?";
    }
    show() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Print2.prototype, "show", null);
const b = new Print2();
const button2 = document.getElementById("second");
button2.addEventListener("click", b.show);
//# sourceMappingURL=decorator.js.map