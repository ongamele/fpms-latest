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
exports.GET_EMPLOYEE_LEAVE = void 0;
const graphql_1 = require("graphql");
const LeaveType_1 = require("../TypeDefs/LeaveType");
const Leaves_1 = require("../../Entities/Leaves");
exports.GET_EMPLOYEE_LEAVE = {
    type: new graphql_1.GraphQLList(LeaveType_1.LeaveType),
    args: {
        employeeID: { type: graphql_1.GraphQLInt },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { employeeID } = args;
            const leave = yield Leaves_1.Leaves.find({
                where: { EmployeeID: employeeID },
            });
            return leave;
        });
    },
};
