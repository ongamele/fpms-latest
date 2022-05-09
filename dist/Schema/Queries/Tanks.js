"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_TANKS = void 0;
const graphql_1 = require("graphql");
const TankType_1 = require("../TypeDefs/TankType");
const Tanks_1 = require("../../Entities/Tanks");
exports.GET_TANKS = {
    type: new graphql_1.GraphQLList(TankType_1.TankType),
    resolve() {
        return __awaiter(this, void 0, void 0, function* () {
            const tanks = yield Tanks_1.Tanks.find({
                relations: ['unleaded93Tank', 'unleaded95Tank', 'diesel10Tank'],
            });
            return tanks;
        });
    },
};
