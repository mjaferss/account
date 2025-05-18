// Middleware: JWT Authentication (skeleton)
// ميدلوير حماية: يمنع الوصول لغير المسجلين (مُعطّل حالياً)
// فعّل الكود بإزالة التعليق عند الحاجة

/*
module.exports = (req, res, next) => {
  // مثال تحقق: هل يوجد مستخدم في الجلسة؟
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};
*/

module.exports = function(req, res, next) {
  // TODO: Implement JWT auth logic
  next();
};
