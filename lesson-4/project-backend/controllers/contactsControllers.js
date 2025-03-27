import * as contactsService from "../services/contactsServices.js";

export const getAllContacts = async (req, res) => {
    const data = await contactsService.listContacts();

    res.json(data);
};

export const getOneContact = (req, res) => {};

export const deleteContact = (req, res) => {};

export const createContact = (req, res) => {};

export const updateContact = (req, res) => {};
