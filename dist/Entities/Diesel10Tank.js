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
exports.Diesel10Tank = void 0;
const typeorm_1 = require("typeorm");
const Tanks_1 = require("./Tanks");
let Diesel10Tank = class Diesel10Tank extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Diesel10Tank.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Diesel10Tank.prototype, "TankID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Diesel10Tank.prototype, "Readings", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Diesel10Tank.prototype, "Date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Diesel10Tank.prototype, "Number", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Tanks_1.Tanks, (tanks) => tanks.diesel10Tank) // specify inverse side as a second parameter
    ,
    (0, typeorm_1.JoinColumn)({ name: 'TankID' }),
    __metadata("design:type", Tanks_1.Tanks)
], Diesel10Tank.prototype, "tanks", void 0);
Diesel10Tank = __decorate([
    (0, typeorm_1.Entity)()
], Diesel10Tank);
exports.Diesel10Tank = Diesel10Tank;
