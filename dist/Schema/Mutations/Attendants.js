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
exports.LOGIN = exports.CREATE_ATTENDANT = void 0;
const graphql_1 = require("graphql");
const AttendantType_1 = require("../TypeDefs/AttendantType");
const Attendants_1 = require("../../Entities/Attendants");
exports.CREATE_ATTENDANT = {
    type: AttendantType_1.AttendantType,
    args: {
        ID: { type: graphql_1.GraphQLString },
        FirstName: { type: graphql_1.GraphQLString },
        LastName: { type: graphql_1.GraphQLString },
        EmployeeNumber: { type: graphql_1.GraphQLString },
        DateOfBirth: { type: graphql_1.GraphQLString },
        Position: { type: graphql_1.GraphQLString },
        DateOfEmployment: { type: graphql_1.GraphQLString },
        Password: { type: graphql_1.GraphQLString },
        SecurityQuestion: { type: graphql_1.GraphQLString },
        Photo: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID, FirstName, LastName, EmployeeNumber, DateOfBirth, Position, DateOfEmployment, Password, SecurityQuestion, Photo, } = args;
            const attendant = yield Attendants_1.Attendants.insert({
                ID,
                FirstName,
                LastName,
                EmployeeNumber,
                DateOfBirth,
                Position,
                DateOfEmployment,
                Password,
                SecurityQuestion,
                Photo,
            });
            return attendant;
        });
    },
};
exports.LOGIN = {
    type: AttendantType_1.AttendantType,
    args: {
        TagID: { type: graphql_1.GraphQLString },
        Password: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { TagID, Password } = args;
            const attendant = yield Attendants_1.Attendants.findOne({
                ID: TagID,
                Password: Password,
            });
            if (!attendant) {
                throw new Error('SHIFT DOESNT EXIST');
            }
            return attendant;
        });
    },
};
