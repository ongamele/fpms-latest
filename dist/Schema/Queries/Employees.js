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
exports.GET_EMPLOYEE_TIMETABLE_DETAILS = exports.GET_EMPLOYEES = void 0;
const graphql_1 = require("graphql");
const EmployeeType_1 = require("../TypeDefs/EmployeeType");
const Employees_1 = require("../../Entities/Employees");
exports.GET_EMPLOYEES = {
    type: new graphql_1.GraphQLList(EmployeeType_1.EmployeeType),
    resolve() {
        return __awaiter(this, void 0, void 0, function* () {
            const employees = yield Employees_1.Employees.find({
                relations: ['shifts'],
            });
            return employees;
        });
    },
};
exports.GET_EMPLOYEE_TIMETABLE_DETAILS = {
    type: new graphql_1.GraphQLList(EmployeeType_1.EmployeeType),
    args: {
        employeeID: { type: graphql_1.GraphQLInt },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { employeeID } = args;
            const employee = yield Employees_1.Employees.find({
                relations: ['shifts'],
                where: { EmployeeID: employeeID },
            });
            return employee;
        });
    },
};
