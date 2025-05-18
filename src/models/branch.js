// Branch (MyCompany) Schema
const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
  name_ar: { type: String, required: true },
  name_ar_suffix: { type: String },
  name_en: { type: String, required: true },
  name_en_suffix: { type: String },
  phone_ar: { type: String },
  mobile_ar: { type: String },
  fax_ar: { type: String },
  phone_en: { type: String },
  mobile_en: { type: String },
  fax_en: { type: String },
  logo: { type: String }, // URL or path to image
  tax_number: { type: String },
  commercial_registration: { type: String },
  license_number: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Branch', branchSchema);
