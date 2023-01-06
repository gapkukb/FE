const lookup = ['', 'K', 'M', 'G', 'T', 'P', 'E'];
export class Formatter {
  private declare lookup: { value: number; symbol: string }[];
  declare formatter: Intl.NumberFormat;
  declare option: ReturnType<Intl.NumberFormat['resolvedOptions']>;
  constructor(public locale: string = 'en', public digits: number = 2) {
    this.formatter = new Intl.NumberFormat(locale, {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    });
    this.option = this.formatter.resolvedOptions();
  }
  format(value: any, digits?: number) {
    const val = +value || 0;

    if (digits === this.digits) {
      return this.formatter.format(val);
    }
    return val.toLocaleString(this.locale, {
      ...this.option,
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    });
  }
  short(value: any) {
    const val = +value || 0;
    try {
      return val.toLocaleString(this.option.locale, {
        ...this.option,
        notation: 'compact',
      });
    } catch {
      return this._short(val);
    }
  }
  currency(value: any, symbol: string = '$') {
    return symbol + this.format(value);
  }
  private _short(value: number) {
    const val = +value || 0;
    const a = this.formatter.format(val).split(',');
    const b = a.length <= 2 ? val : val / (1000 * (a.length - 1));
    const c = this.formatter.format(b);

    return c + lookup[a.length - 1];
  }
}

export default new Formatter();
