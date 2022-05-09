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
exports.Diesel10 = void 0;
const typeorm_1 = require("typeorm");
const Pumps_1 = require("./Pumps");
let Diesel10 = class Diesel10 extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Diesel10.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Diesel10.prototype, "PumpID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Diesel10.prototype, "Readings", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Diesel10.prototype, "Date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Diesel10.prototype, "Number", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Pumps_1.Pumps, (pumps) => pumps.diesel10) // specify inverse side as a second parameter
    ,
    (0, typeorm_1.JoinColumn)({ name: 'PumpID' }),
    __metadata("design:type", Pumps_1.Pumps)
], Diesel10.prototype, "pumps", void 0);
Diesel10 = __decorate([
    (0, typeorm_1.Entity)()
], Diesel10);
exports.Diesel10 = Diesel10;
