import sum from '../src/sum';
import * as assert from 'assert'; //node断言
import * as chai from 'chai'; //浏览和node都有用

/*
通过describe定义一个分组
*/
describe('测试sum.ts', function () {
  it('1+1=2', function () {

    assert.equal(sum(1, 1), 2);
  });

  it('2+2=4', function () {
    chai.expect(2 + 2).to.be.equal(4);
  });

  it('1+2=3', function () {
    chai.expect(1 + 2 === 3).to.be.ok;
  });
});
