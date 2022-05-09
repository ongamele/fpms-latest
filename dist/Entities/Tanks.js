"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tanks = void 0;
const typeorm_1 = require("typeorm");
const Unleaded93Tank_1 = require("./Unleaded93Tank");
const Unleaded95Tank_1 = require("./Unleaded95Tank");
const Diesel10Tank_1 = require("./Diesel10Tank");
let Tanks = class Tanks extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Tanks.prototype, "TankID", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Unleaded95Tank_1.Unleaded95Tank, (unleaded95Tank) => unleaded95Tank.tanks) // specify inverse side as a second parameter
    ,
    __metadata("design:type", Unleaded95Tank_1.Unleaded95Tank)
], Tanks.prototype, "unleaded95Tank", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Unleaded93Tank_1.Unleaded93Tank, (unleaded93Tank) => unleaded93Tank.tanks) // specify inverse side as a second parameter
    ,
    __metadata("design:type", Unleaded93Tank_1.Unleaded93Tank)
], Tanks.prototype, "unleaded93Tank", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Diesel10Tank_1.Diesel10Tank, (diesel10Tank) => diesel10Tank.tanks) // specify inverse side as a second parameter
    ,
    __metadata("design:type", Diesel10Tank_1.Diesel10Tank)
], Tanks.prototype, "diesel10Tank", void 0);
Tanks = __decorate([
    (0, typeorm_1.Entity)()
], Tanks);
exports.Tanks = Tanks;
