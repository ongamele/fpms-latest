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
exports.CREATE_PUMP = void 0;
const graphql_1 = require("graphql");
const PumpsType_1 = require("../TypeDefs/PumpsType");
const Pumps_1 = require("../../Entities/Pumps");
exports.CREATE_PUMP = {
    type: PumpsType_1.PumpsType,
    args: {
        PumpName: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { PumpName } = args;
            const pump = yield Pumps_1.Pumps.insert({
                PumpID: PumpName,
            });
            return pump;
        });
    },
};
