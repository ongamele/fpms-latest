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
exports.Attendant7 = void 0;
const typeorm_1 = require("typeorm");
let Attendant7 = class Attendant7 extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Attendant7.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attendant7.prototype, "FirstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attendant7.prototype, "LastName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attendant7.prototype, "TagID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attendant7.prototype, "Days", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attendant7.prototype, "Shifts", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attendant7.prototype, "Start", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attendant7.prototype, "End", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attendant7.prototype, "ClockIn", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attendant7.prototype, "ClockOut", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attendant7.prototype, "Pumps", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attendant7.prototype, "Reason", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attendant7.prototype, "Code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attendant7.prototype, "Min", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attendant7.prototype, "Adj", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attendant7.prototype, "Pay_hrs", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attendant7.prototype, "Due_date", void 0);
Attendant7 = __decorate([
    (0, typeorm_1.Entity)()
], Attendant7);
exports.Attendant7 = Attendant7;
