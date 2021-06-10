import './string'
describe('String Helpers', () => {
  describe('remove', () => {
    it('should remove pattern', () => expect("Hello World".remove(/Hello /)).toEqual('World'));
  });
  describe('squish', () => {
    it('should remove spaces and trails', () => expect(" \n  foo\n\r \t bar \n".squish()).toEqual("foo bar"));
  });

  describe('truncate', () => {
    it('should truncate with only lenght', () => expect("Oh dear! Oh dear! I shall be late!".truncate(20)).toEqual("Oh dear! Oh dear!..."));
    it('should truncate with ommision', () => expect("Oh dear! Oh dear! I shall be late!".truncate(20, {omission: '&hellip;'})).toEqual("Oh dear! Oh &hellip;"));
    it('should truncate with string separator', () => expect("Oh dear! Oh dear! I shall be late!".truncate(18, {separator: ' '})).toEqual("Oh dear! Oh..."));
    it('should truncate with regex separator', () => expect("Oh dear! Oh dear! I shall be late!".truncate(18, {separator: /\s/})).toEqual("Oh dear! Oh..."));
  });
});