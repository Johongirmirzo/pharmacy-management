"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const html_entities_1 = require("html-entities");
const sanitizeData = (data) => (0, html_entities_1.encode)(data);
exports.default = sanitizeData;
