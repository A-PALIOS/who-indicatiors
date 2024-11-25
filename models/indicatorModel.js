import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;


const indicators = db.define('indicators', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    indicator_name: {
        type: DataTypes.TEXT,
        allowNull: true 
    },
    q4all_Ind_number: {
        type: DataTypes.TEXT,
        allowNull: true 
    },
    status: {
        type: DataTypes.STRING(200),
        allowNull: true 
    },
    indicator_cluster: 
    {
        type: DataTypes.STRING(200),
        allowNull: true 
    },
    ind_Merge: 
    {
        type: DataTypes.STRING(200),
        allowNull: true 
    },
    catergory_of_Indicator: {
        type: DataTypes.STRING(200),
        allowNull: true 
    },
    dimension: {
        type: DataTypes.STRING(200),
        allowNull: true 
    },
    type_of_healthcare: 
    {
        type: DataTypes.STRING(200),
        allowNull: true 
    },
    type_of_healthcare_providers_D1_D7: 
    {
        type: DataTypes.STRING(50),
        allowNull: true 
    },
    cross_Cutting_Dimensions_A_I: 
    {
        type: DataTypes.STRING(50),
        allowNull: true 
    },
    cross_Cutting_Dimensions_Inputs_Process_Outputs:
    {
        type: DataTypes.TEXT,
        allowNull: true 
    },
    dimensions_of_Quality_QoCOfficeReport: 
    {
        type: DataTypes.TEXT,
        allowNull: true 
    },

    priority: 
    {
        type: DataTypes.INTEGER,
        allowNull: true 
    },
    data_collection:
    {
        type: DataTypes.TEXT,
        allowNull: true 
    },
    collecting_National_Organization:
    {
        type: DataTypes.TEXT,
        allowNull: true
    },
    legal_Organizational_Requirements:
    {
        type: DataTypes.INTEGER,
        allowNull: true 
    },
    proponent_Organization_WG:
    {
        type: DataTypes.TEXT,
        allowNull: true 
    },
    rationale_Description:
    {
        type: DataTypes.TEXT,
        allowNull: true 
    },
    objective:
    {
        type: DataTypes.TEXT,
        allowNull: true 
    },
    calculation_Formula:
    {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    numerator:
    {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    numerator_Definitions:
    {
        type: DataTypes.TEXT,
        allowNull: true
    },
    denominator:
    {
        type: DataTypes.TEXT,
        allowNull: true
    },
    denominator_Definitions:
    {
        type: DataTypes.TEXT,
        allowNull: true
    },
    target_Population:
    {
        type: DataTypes.STRING(200),
        allowNull: true 
    },
    field_Topic: {
        type: DataTypes.TEXT,
        allowNull: true 
    },
    extraCol2: {
        type: DataTypes.TEXT,
        allowNull: true 
    },
    periodicity: {
        type: DataTypes.STRING(200),
        allowNull: true 
    },
    data_Collection_Steps: {
        type: DataTypes.TEXT,
        allowNull: true 
    },
    legal_Requirements: {
        type: DataTypes.TEXT,
        allowNull: true 
    },
    responsible_for_Monitoring: {
        type: DataTypes.STRING(200),
        allowNull: true 
    },
    deadline_Reporting: {
        type: DataTypes.STRING(200),
        allowNull: true 
    },
    supervisor_Body: {
        type: DataTypes.STRING(200),
        allowNull: true 
    },
    management_Entity: {
        type: DataTypes.STRING(200),
        allowNull: true 
    },
    applicable_period: {
        type: DataTypes.STRING(200),
        allowNull: true 
    },
    unit_of_Measurement: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    data_Source_Monitoring_Basis: {
        type: DataTypes.TEXT,
        allowNull: true 
    },
    it_System_Source: {
        type: DataTypes.STRING(500),
        allowNull: true 
    },
    reference_Value_Target: {
        type: DataTypes.STRING(200),
        allowNull: true 
    },
    base_Value: {
        type: DataTypes.STRING(200),
        allowNull: true 
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true 
    },
    sources_and_Further_Reading: {
        type: DataTypes.TEXT,
        allowNull: true 
    },
    selected_indicator: {
        type: DataTypes.STRING(200),
        allowNull: true 
    },
    adaptation_Needs: {
        type: DataTypes.STRING(500),
        allowNull: true 
    },
    piloting: {
        type: DataTypes.STRING(500),
        allowNull: true 
    },
    opinion_from_ODIPY_Other_experts: {
        type: DataTypes.STRING(500),
        allowNull: true 
    },
    pilot_outcome: {
        type: DataTypes.STRING(500),
        allowNull: true 
    },
    pilot_success_criteria: {
        type: DataTypes.STRING(500),
        allowNull: true 
    }
    
},{
    freezeTableName: true
});
indicators.belongsTo(Users,{foreignKey: {name: 'user_Id',allowNull: true}})

export default indicators;
