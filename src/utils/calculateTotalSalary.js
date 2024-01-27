const calculateTotalSalary = (salaryInfo) => {
  const { baseSalary, allowances, deductions } = salaryInfo;

  // قم بحساب إجمالي الراتب بجمع الراتب الأساسي والبدلات والمكافآت ثم طرح الخصومات
  const totalSalary = baseSalary + allowances - deductions;

  // تأكد من عدم الحصول على قيمة سلبية
  return totalSalary >= 0 ? totalSalary : 0;
};

export default calculateTotalSalary;
