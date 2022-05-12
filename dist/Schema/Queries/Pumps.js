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
exports.GET_ALL_PUMPS = exports.GET_PUMPS = void 0;
const graphql_1 = require("graphql");
const PumpsType_1 = require("../TypeDefs/PumpsType");
const Pumps_1 = require("../../Entities/Pumps");
exports.GET_PUMPS = {
    type: new graphql_1.GraphQLList(PumpsType_1.PumpsType),
    resolve() {
        return __awaiter(this, void 0, void 0, function* () {
            const pumps = yield Pumps_1.Pumps.find({
                relations: ['unleaded93', 'unleaded95', 'diesel10'],
            });
            return pumps;
        });
    },
};
exports.GET_ALL_PUMPS = {
    type: new graphql_1.GraphQLList(PumpsType_1.PumpsType),
    resolve() {
        return __awaiter(this, void 0, void 0, function* () {
            const pumps = yield Pumps_1.Pumps.find();
            return pumps;
        });
    },
};
