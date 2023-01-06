type Success = (text: string) => any;

const isFallback = !navigator.clipboard;

export default function copy(text: string | undefined, success: Success): any {
  if (!text) return;
  if (!isFallback) {
    return navigator.clipboard.writeText(text).then(
      function () {
        success(text);
      },
      function () {
        // 禁止写入剪切板后使用兜底方法
        copyFallback(text, success);
      }
    );
  }
  copyFallback(text, success);
}

function copyFallback(text: string, success: Success) {
  const el = document.createElement('textarea') as HTMLTextAreaElement;
  el.style.cssText = 'opacity:0;width:0;position:fixed;left:-999px;top:10px;';
  el.setAttribute('readonly', 'readonly');
  document.body.appendChild(el);
  el.value = text;
  el.select();
  document.execCommand('copy', true);
  success?.(text);
}
