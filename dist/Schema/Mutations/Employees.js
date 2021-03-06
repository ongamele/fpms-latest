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
exports.LOGIN = exports.UPDATE_EMPLOYEE = exports.DELETE_EMPLOYEE = exports.UPDATE_EMPLOYEE_TEA = exports.UPDATE_EMPLOYEE_MIN = exports.UPDATE_EMPLOYEE_DUE_DATE = exports.UPDATE_EMPLOYEE_CODE = exports.UPDATE_EMPLOYEE_ADJ = exports.UPDATE_EMPLOYEE_REASON = exports.UPDATE_EMPLOYEE_CLOCKOUT = exports.UPDATE_EMPLOYEE_CLOCKIN = exports.UPDATE_EMPLOYEE_PUMPS = exports.UPDATE_EMPLOYEE_END = exports.UPDATE_EMPLOYEE_START = exports.CREATE_EMPLOYEE = void 0;
const graphql_1 = require("graphql");
const EmployeeType_1 = require("../TypeDefs/EmployeeType");
const Timetable_1 = require("../TypeDefs/Timetable");
const Employees_1 = require("../../Entities/Employees");
const Shifts_1 = require("../../Entities/Shifts");
exports.CREATE_EMPLOYEE = {
    type: EmployeeType_1.EmployeeType,
    args: {
        FirstName: { type: graphql_1.GraphQLString },
        LastName: { type: graphql_1.GraphQLString },
        EmployeeID: { type: graphql_1.GraphQLInt },
        Position: { type: graphql_1.GraphQLString },
        DateOfEmployment: { type: graphql_1.GraphQLString },
        Password: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { FirstName, LastName, EmployeeID, Position, DateOfEmployment, Password, } = args;
            const attendant = yield Employees_1.Employees.insert({
                FirstName,
                LastName,
                EmployeeID,
                Position,
                DateOfEmployment,
                Password,
            });
            return attendant;
        });
    },
};
exports.UPDATE_EMPLOYEE_START = {
    type: Timetable_1.Timetable,
    args: {
        id: { type: graphql_1.GraphQLID },
        start: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, start } = args;
            const shift = yield Shifts_1.Shifts.update(id, { Start: start });
            return shift;
        });
    },
};
exports.UPDATE_EMPLOYEE_END = {
    type: Timetable_1.Timetable,
    args: {
        id: { type: graphql_1.GraphQLID },
        end: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, end } = args;
            const shift = yield Shifts_1.Shifts.update(id, { End: end });
            return shift;
        });
    },
};
exports.UPDATE_EMPLOYEE_PUMPS = {
    type: Timetable_1.Timetable,
    args: {
        id: { type: graphql_1.GraphQLID },
        pumps: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, pumps } = args;
            yield Shifts_1.Shifts.update(id, { Pumps: pumps });
            return { successful: true, message: 'SHIFT UPDATED' };
        });
    },
};
exports.UPDATE_EMPLOYEE_CLOCKIN = {
    type: Timetable_1.Timetable,
    args: {
        id: { type: graphql_1.GraphQLID },
        clockIn: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, clockIn } = args;
            yield Shifts_1.Shifts.update(id, { ClockIn: clockIn });
            return { successful: true, message: 'SHIFT UPDATED' };
        });
    },
};
exports.UPDATE_EMPLOYEE_CLOCKOUT = {
    type: Timetable_1.Timetable,
    args: {
        id: { type: graphql_1.GraphQLID },
        clockOut: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, clockOut } = args;
            yield Shifts_1.Shifts.update(id, { ClockOut: clockOut });
            return { successful: true, message: 'SHIFT UPDATED' };
        });
    },
};
exports.UPDATE_EMPLOYEE_REASON = {
    type: Timetable_1.Timetable,
    args: {
        id: { type: graphql_1.GraphQLID },
        reason: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, reason } = args;
            yield Shifts_1.Shifts.update(id, { Reason: reason });
            return { successful: true, message: 'SHIFT UPDATED' };
        });
    },
};
exports.UPDATE_EMPLOYEE_ADJ = {
    type: Timetable_1.Timetable,
    args: {
        id: { type: graphql_1.GraphQLID },
        adj: { type: graphql_1.GraphQLString },
        attendant: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, adj } = args;
            yield Shifts_1.Shifts.update(id, { Adj: adj });
            return { successful: true, message: 'SHIFT UPDATED' };
        });
    },
};
exports.UPDATE_EMPLOYEE_CODE = {
    type: Timetable_1.Timetable,
    args: {
        id: { type: graphql_1.GraphQLID },
        code: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, code } = args;
            yield Shifts_1.Shifts.update(id, { Code: code });
            return { successful: true, message: 'SHIFT UPDATED' };
        });
    },
};
exports.UPDATE_EMPLOYEE_DUE_DATE = {
    type: Timetable_1.Timetable,
    args: {
        id: { type: graphql_1.GraphQLID },
        date: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, date } = args;
            yield Shifts_1.Shifts.update(id, { Due_date: date });
            return { successful: true, message: 'SHIFT UPDATED' };
        });
    },
};
exports.UPDATE_EMPLOYEE_MIN = {
    type: Timetable_1.Timetable,
    args: {
        id: { type: graphql_1.GraphQLID },
        min: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, min } = args;
            yield Shifts_1.Shifts.update(id, { Min: min });
            return { successful: true, message: 'SHIFT UPDATED' };
        });
    },
};
exports.UPDATE_EMPLOYEE_TEA = {
    type: Timetable_1.Timetable,
    args: {
        id: { type: graphql_1.GraphQLID },
        tea: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, tea } = args;
            yield Shifts_1.Shifts.update(id, { Tea: tea });
            return { successful: true, message: 'SHIFT UPDATED' };
        });
    },
};
exports.DELETE_EMPLOYEE = {
    type: EmployeeType_1.EmployeeType,
    args: {
        EmployeeID: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { EmployeeID } = args;
            yield Employees_1.Employees.delete(EmployeeID);
            return { successful: true, message: 'DELETE WORKED' };
        });
    },
};
exports.UPDATE_EMPLOYEE = {
    type: EmployeeType_1.EmployeeType,
    args: {
        FirstName: { type: graphql_1.GraphQLString },
        LastName: { type: graphql_1.GraphQLString },
        EmployeeID: { type: graphql_1.GraphQLInt },
        IdNumber: { type: graphql_1.GraphQLString },
        CellNumber: { type: graphql_1.GraphQLString },
        Gender: { type: graphql_1.GraphQLString },
        Position: { type: graphql_1.GraphQLString },
        DateOfEmployment: { type: graphql_1.GraphQLString },
        SecurityQuestion: { type: graphql_1.GraphQLString },
        Answer: { type: graphql_1.GraphQLString },
        Photo: { type: graphql_1.GraphQLString },
        ShoeSize: { type: graphql_1.GraphQLInt },
        TShirtSize: { type: graphql_1.GraphQLString },
        JacketSize: { type: graphql_1.GraphQLString },
        PantsSize: { type: graphql_1.GraphQLInt },
        Bank: { type: graphql_1.GraphQLString },
        AccountNumber: { type: graphql_1.GraphQLInt },
        AccountType: { type: graphql_1.GraphQLString },
        BranchCode: { type: graphql_1.GraphQLString },
        StreetNumber: { type: graphql_1.GraphQLString },
        StreetName: { type: graphql_1.GraphQLString },
        Suburb: { type: graphql_1.GraphQLString },
        City: { type: graphql_1.GraphQLString },
        Code: { type: graphql_1.GraphQLString },
        TaxNumber: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { FirstName, LastName, EmployeeID, IdNumber, CellNumber, Gender, Position, DateOfEmployment, SecurityQuestion, Answer, Photo, ShoeSize, TShirtSize, JacketSize, PantsSize, Bank, AccountNumber, AccountType, BranchCode, StreetNumber, StreetName, Suburb, City, Code, TaxNumber, } = args;
            yield Employees_1.Employees.update(EmployeeID, {
                FirstName,
                LastName,
                EmployeeID,
                IdNumber,
                CellNumber,
                Gender,
                Position,
                DateOfEmployment,
                SecurityQuestion,
                Answer,
                Photo,
                ShoeSize,
                TShirtSize,
                JacketSize,
                PantsSize,
                Bank,
                AccountNumber,
                AccountType,
                BranchCode,
                StreetNumber,
                StreetName,
                Suburb,
                City,
                Code,
                TaxNumber,
            });
            return { successful: true, message: 'SHIFT UPDATED' };
        });
    },
};
exports.LOGIN = {
    type: new graphql_1.GraphQLList(EmployeeType_1.EmployeeType),
    args: {
        employeeID: { type: graphql_1.GraphQLInt },
        password: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { employeeID, password } = args;
            const employee = yield Employees_1.Employees.find({
                relations: ['shifts'],
                where: { EmployeeID: employeeID, Password: password },
            });
            return employee;
        });
    },
};
