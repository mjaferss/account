// Script to insert a test branch
require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const mongoose = require('mongoose');
const Branch = require('../src/models/branch');

const MONGODB_URI = process.env.MONGODB_URI;
console.log('MONGODB_URI:', MONGODB_URI);

async function seed() {
  await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  const branch1 = new Branch({
    name_ar: 'مؤسسة سليمان الفضيلي',
    name_ar_suffix: 'للتخليص الجمركي',
    name_en: 'Sulaiman Al-Fudaili Est.',
    name_en_suffix: 'Customs Clearance',
    phone_ar: '0112345678',
    mobile_ar: '0551234567',
    fax_ar: '0112345679',
    phone_en: '+966112345678',
    mobile_en: '+966551234567',
    fax_en: '+966112345679',
    logo: 'https://example.com/logo.png',
    tax_number: '1234567890',
    commercial_registration: '9876543210',
    license_number: 'LC-2025-001'
  });

  const branch2 = new Branch({
    name_ar: 'شركة المستقبل الحديثة',
    name_ar_suffix: 'للشحن البري',
    name_en: 'Modern Future Co.',
    name_en_suffix: 'Land Shipping',
    phone_ar: '0118765432',
    mobile_ar: '0558765432',
    fax_ar: '0118765433',
    phone_en: '+966118765432',
    mobile_en: '+966558765432',
    fax_en: '+966118765433',
    logo: 'https://example.com/logo2.png',
    tax_number: '2233445566',
    commercial_registration: '1122334455',
    license_number: 'LC-2025-002'
  });

  await branch1.save();
  console.log('Test branch 1 inserted:', branch1);
  await branch2.save();
  console.log('Test branch 2 inserted:', branch2);
  await mongoose.disconnect();
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
