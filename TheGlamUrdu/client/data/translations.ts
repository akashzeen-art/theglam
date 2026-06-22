export type Language = "urdu" | "bangla";

export const translations = {
  urdu: {
    nav: {
      home: "ہوم",
      about: "ہمارے بارے میں",
      contact: "رابطہ کریں",
      account: "میرا اکاؤنٹ",
    },
    subscription: {
      title: "ابھی سبسکرائب کریں",
      label: "موبائل نمبر درج کریں",
      placeholder: "xxxxxxxxxx",
      submit: "ابھی سبسکرائب کریں",
    },
    plan: {
      title: "اپنا پیکج منتخب کریں",
      monthly: "ماہانہ",
      yearly: "سالانہ",
      discount50: "50٪ ڈسکاؤنٹ",
      discount55: "55٪ ڈسکاؤنٹ",
      unlimited: "ان لِمٹڈ ویڈیوز اور ویب سیریز",
      submit: "کنفرم کریں",
    },
    currency: {
      symbol: "₨",
      code: "PKR",
    },
    prices: {
      monthly: 125,
      monthlyOriginal: 250,
      yearly: 199,
      yearlyOriginal: 450,
    },
  },
  bangla: {
    nav: {
      home: "হোম",
      about: "আমাদের সম্পর্কে",
      contact: "যোগাযোগ",
      account: "আমার একাউন্ট",
    },
    subscription: {
      title: "এখনই সাবস্ক্রাইব করুন",
      label: "মোবাইল নম্বর লিখুন",
      placeholder: "মোবাইল নম্বর",
      submit: "এখনই সাবস্ক্রাইব করুন",
    },
    plan: {
      title: "আপনার প্ল্যান বেছে নিন",
      monthly: "মাসিক",
      yearly: "বার্ষিক",
      discount50: "৫০% ছাড়",
      discount55: "৫৫% ছাড়",
      unlimited: "আনলিমিটেড ভিডিও ও ওয়েব সিরিজ",
      submit: "সাবমিট করুন",
    },
    currency: {
      symbol: "৳",
      code: "BDT",
    },
    prices: {
      monthly: 125,
      monthlyOriginal: 250,
      yearly: 199,
      yearlyOriginal: 450,
    },
  },
} as const;
