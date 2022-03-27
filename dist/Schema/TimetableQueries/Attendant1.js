"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ATTENDANT16 = exports.GET_ATTENDANT15 = exports.GET_ATTENDANT14 = exports.GET_ATTENDANT13 = exports.GET_ATTENDANT12 = exports.GET_ATTENDANT11 = exports.GET_ATTENDANT10 = exports.GET_ATTENDANT9 = exports.GET_ATTENDANT8 = exports.GET_ATTENDANT7 = exports.GET_ATTENDANT6 = exports.GET_ATTENDANT5 = exports.GET_ATTENDANT4 = exports.GET_ATTENDANT3 = exports.GET_ATTENDANT2 = exports.GET_ATTENDANT1 = exports.GET_ATTENDANT_TIMETABLE = void 0;
const graphql_1 = require("graphql");
const Timetable_1 = require("../TypeDefs/Timetable");
const Attendant1_1 = require("../../ShiftsEntities/Attendant1");
const Attendant2_1 = require("../../ShiftsEntities/Attendant2");
const Attendant3_1 = require("../../ShiftsEntities/Attendant3");
const Attendant4_1 = require("../../ShiftsEntities/Attendant4");
const Attendant5_1 = require("../../ShiftsEntities/Attendant5");
const Attendant6_1 = require("../../ShiftsEntities/Attendant6");
const Attendant7_1 = require("../../ShiftsEntities/Attendant7");
const Attendant8_1 = require("../../ShiftsEntities/Attendant8");
const Attendant9_1 = require("../../ShiftsEntities/Attendant9");
const Attendant10_1 = require("../../ShiftsEntities/Attendant10");
const Attendant11_1 = require("../../ShiftsEntities/Attendant11");
const Attendant12_1 = require("../../ShiftsEntities/Attendant12");
const Attendant13_1 = require("../../ShiftsEntities/Attendant13");
const Attendant14_1 = require("../../ShiftsEntities/Attendant14");
const Attendant15_1 = require("../../ShiftsEntities/Attendant15");
const Attendant16_1 = require("../../ShiftsEntities/Attendant16");
exports.GET_ATTENDANT_TIMETABLE = {
    type: new graphql_1.GraphQLList(Timetable_1.Timetable),
    args: {
        attendant: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        const { attendant } = args;
        if (attendant == 'Sithembile') {
            return Attendant1_1.Attendant1.find({ order: { ID: 'ASC' }, take: 31 });
        }
        if (attendant == 'Thapelo') {
            return Attendant2_1.Attendant2.find({ order: { ID: 'ASC' }, take: 31 });
        }
        if (attendant == 'Lethu') {
            return Attendant3_1.Attendant3.find({ order: { ID: 'ASC' }, take: 31 });
        }
        if (attendant == 'Thulile') {
            return Attendant4_1.Attendant4.find({ order: { ID: 'ASC' }, take: 31 });
        }
        if (attendant == 'Marvellous') {
            return Attendant5_1.Attendant5.find({ order: { ID: 'ASC' }, take: 31 });
        }
        if (attendant == 'Dannick') {
            return Attendant6_1.Attendant6.find({ order: { ID: 'ASC' }, take: 31 });
        }
        if (attendant == 'Ntuthuko') {
            return Attendant7_1.Attendant7.find({ order: { ID: 'ASC' }, take: 31 });
        }
        if (attendant == 'Sabelo') {
            return Attendant8_1.Attendant8.find({ order: { ID: 'ASC' }, take: 31 });
        }
        if (attendant == 'Nyiko') {
            return Attendant10_1.Attendant10.find({ order: { ID: 'ASC' }, take: 31 });
        }
        if (attendant == 'Vusi') {
            return Attendant12_1.Attendant12.find({ order: { ID: 'ASC' }, take: 31 });
        }
        if (attendant == 'Sicelo') {
            return Attendant13_1.Attendant13.find({ order: { ID: 'ASC' }, take: 31 });
        }
        if (attendant == 'Thamsanqa') {
            return Attendant14_1.Attendant14.find({ order: { ID: 'ASC' }, take: 31 });
        }
        if (attendant == 'Joseph') {
            return Attendant15_1.Attendant15.find({ order: { ID: 'ASC' }, take: 31 });
        }
    },
};
exports.GET_ATTENDANT1 = {
    type: new graphql_1.GraphQLList(Timetable_1.Timetable),
    resolve() {
        return Attendant1_1.Attendant1.find({ order: { ID: 'ASC' }, take: 31 });
    },
};
exports.GET_ATTENDANT2 = {
    type: new graphql_1.GraphQLList(Timetable_1.Timetable),
    resolve() {
        return Attendant2_1.Attendant2.find({ order: { ID: 'ASC' }, take: 31 });
    },
};
exports.GET_ATTENDANT3 = {
    type: new graphql_1.GraphQLList(Timetable_1.Timetable),
    resolve() {
        return Attendant3_1.Attendant3.find({ order: { ID: 'ASC' }, take: 31 });
    },
};
exports.GET_ATTENDANT4 = {
    type: new graphql_1.GraphQLList(Timetable_1.Timetable),
    resolve() {
        return Attendant4_1.Attendant4.find({ order: { ID: 'ASC' }, take: 31 });
    },
};
exports.GET_ATTENDANT5 = {
    type: new graphql_1.GraphQLList(Timetable_1.Timetable),
    resolve() {
        return Attendant5_1.Attendant5.find({ order: { ID: 'ASC' }, take: 31 });
    },
};
exports.GET_ATTENDANT6 = {
    type: new graphql_1.GraphQLList(Timetable_1.Timetable),
    resolve() {
        return Attendant6_1.Attendant6.find({ order: { ID: 'ASC' }, take: 31 });
    },
};
exports.GET_ATTENDANT7 = {
    type: new graphql_1.GraphQLList(Timetable_1.Timetable),
    resolve() {
        return Attendant7_1.Attendant7.find({ order: { ID: 'ASC' }, take: 31 });
    },
};
exports.GET_ATTENDANT8 = {
    type: new graphql_1.GraphQLList(Timetable_1.Timetable),
    resolve() {
        return Attendant8_1.Attendant8.find({ order: { ID: 'ASC' }, take: 31 });
    },
};
exports.GET_ATTENDANT9 = {
    type: new graphql_1.GraphQLList(Timetable_1.Timetable),
    resolve() {
        return Attendant9_1.Attendant9.find({ order: { ID: 'ASC' }, take: 31 });
    },
};
exports.GET_ATTENDANT10 = {
    type: new graphql_1.GraphQLList(Timetable_1.Timetable),
    resolve() {
        return Attendant10_1.Attendant10.find({ order: { ID: 'ASC' }, take: 31 });
    },
};
exports.GET_ATTENDANT11 = {
    type: new graphql_1.GraphQLList(Timetable_1.Timetable),
    resolve() {
        return Attendant11_1.Attendant11.find({ order: { ID: 'ASC' }, take: 31 });
    },
};
exports.GET_ATTENDANT12 = {
    type: new graphql_1.GraphQLList(Timetable_1.Timetable),
    resolve() {
        return Attendant12_1.Attendant12.find({ order: { ID: 'ASC' }, take: 31 });
    },
};
exports.GET_ATTENDANT13 = {
    type: new graphql_1.GraphQLList(Timetable_1.Timetable),
    resolve() {
        return Attendant13_1.Attendant13.find({ order: { ID: 'ASC' }, take: 31 });
    },
};
exports.GET_ATTENDANT14 = {
    type: new graphql_1.GraphQLList(Timetable_1.Timetable),
    resolve() {
        return Attendant14_1.Attendant14.find({ order: { ID: 'ASC' }, take: 31 });
    },
};
exports.GET_ATTENDANT15 = {
    type: new graphql_1.GraphQLList(Timetable_1.Timetable),
    resolve() {
        return Attendant15_1.Attendant15.find({ order: { ID: 'ASC' }, take: 31 });
    },
};
exports.GET_ATTENDANT16 = {
    type: new graphql_1.GraphQLList(Timetable_1.Timetable),
    resolve() {
        return Attendant16_1.Attendant16.find({ order: { ID: 'ASC' }, take: 31 });
    },
};
