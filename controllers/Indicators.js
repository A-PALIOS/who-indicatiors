import e from "express";
import Indicators from "../models/indicatorModel.js";
import argon2 from "argon2";

// Get all indicators
// Get all indicators with all columns
export const getIndicators = async (req, res) => {
    try {
        const response = await Indicators.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// Get a specific indicator by ID with all columns
export const getIndicatorsById = async (req, res) => {
    try {
        const response = await Indicators.findOne({
            where: { id: req.params.id }
        });
        if (!response) return res.status(404).json({ msg: "Indicator not found" });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// Create a new indicator with all columns
export const createIndicators = async (req, res) => {
    try {
        await Indicators.create(req.body);
        res.status(201).json({ msg: "Indicator created successfully" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
// Create a new indicator with all columns
export const createIndicatorsJson = async (req, res) => {
    try {
        // Parse the JSON data from the uploaded file (req.file is available because of multer)
        const indicatorsData = JSON.parse(req.file.buffer.toString());

        // Assume indicatorsData is an array of objects to be created
        for (const data of indicatorsData) {
            // Create each indicator in the database
            await Indicators.create(data);
        }

        res.status(201).json({ msg: "Indicators created successfully" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ msg: error.message });
    }
};

// Update an existing indicator with all columns
export const updateIndicators = async (req, res) => {
    const indicator = await Indicators.findOne({
        where: { id: req.params.id }
    });

    if (!indicator) return res.status(404).json({ msg: "Indicator not found" });

    try {
        await Indicators.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json({ msg: "Indicator updated successfully" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

// Delete an indicator
export const deleteIndicator = async (req, res) => {
    const indicator = await Indicators.findOne({
        where: { id: req.params.id }
    });

    if (!indicator) return res.status(404).json({ msg: "Indicator not found" });

    try {
        await Indicators.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json({ msg: "Indicator deleted successfully" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};