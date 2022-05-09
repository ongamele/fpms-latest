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
exports.Unleaded95 = void 0;
const typeorm_1 = require("typeorm");
const Pumps_1 = require("./Pumps");
let Unleaded95 = class Unleaded95 extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Unleaded95.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Unleaded95.prototype, "PumpID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Unleaded95.prototype, "Readings", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Unleaded95.prototype, "Date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Unleaded95.prototype, "Number", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Pumps_1.Pumps, (pumps) => pumps.unleaded95) // specify inverse side as a second parameter
    ,
    (0, typeorm_1.JoinColumn)({ name: 'PumpID' }),
    __metadata("design:type", Pumps_1.Pumps)
], Unleaded95.prototype, "pumps", void 0);
Unleaded95 = __decorate([
    (0, typeorm_1.Entity)()
], Unleaded95);
exports.Unleaded95 = Unleaded95;
