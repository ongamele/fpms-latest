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
exports.Pumps = void 0;
const typeorm_1 = require("typeorm");
const Unleaded93_1 = require("./Unleaded93");
const Unleaded95_1 = require("./Unleaded95");
const Diesel10_1 = require("./Diesel10");
let Pumps = class Pumps extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Pumps.prototype, "PumpID", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Unleaded95_1.Unleaded95, (unleaded95) => unleaded95.pumps) // specify inverse side as a second parameter
    ,
    __metadata("design:type", Unleaded95_1.Unleaded95)
], Pumps.prototype, "unleaded95", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Unleaded93_1.Unleaded93, (unleaded93) => unleaded93.pumps) // specify inverse side as a second parameter
    ,
    __metadata("design:type", Unleaded93_1.Unleaded93)
], Pumps.prototype, "unleaded93", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Diesel10_1.Diesel10, (diesel10) => diesel10.pumps) // specify inverse side as a second parameter
    ,
    __metadata("design:type", Diesel10_1.Diesel10)
], Pumps.prototype, "diesel10", void 0);
Pumps = __decorate([
    (0, typeorm_1.Entity)()
], Pumps);
exports.Pumps = Pumps;
