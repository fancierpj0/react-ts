/*
Sinon 是用于 JavaScript 的测试框架，适用于任何单元测试框架。
Sinon 将测试为三种类型：
    + Spies：提供有关函数调用的信息，而不会影响其行为
    + Stubs：类似于 Spies，但完全取代了功能。这样就可以使存根函数做任何你喜欢的事情 - 抛出异常，返回一个特定的值等等
    + Mocks：通过组合 Spies 和 Stubs，可以更轻松地替换整个对象

监控函数执行	真正执行原函数	替换原有实现	提供行为描述
spy	是	是
stub	是		是
mock	是		是	是
*/
import * as sinon from 'sinon';
import * as chai from 'chai';

import Todos from '../src/todo';

describe('测试Todos', function () {
  //spy提供函数调用的信息，不会影响其行为(判断它执行没执行，调没调，执行了几次)
  it('spy print', function () {
    let store = {save() {}};
    let t = new Todos(store);
    //用sinon.spy监控console.log方法，但并不会替换console.log的实现
    sinon.spy(console, 'log');
    t.add('eat');
    t.add('sleep');
    t.print();
    //@ts-ignore
    chai.expect(console.log.calledOnce).to.be.true;/*如果spy监控的console.log函数刚好被调用一次 则返回*/
  });

  //stub完全取代了原本的功能
  it('stub print', function () {
    let store = {save() {}};
    let t = new Todos(store);
    const stubAdd = sinon.stub(t, 'add').callsFake(() => {
    });
    stubAdd('eat');
    stubAdd('sleep');
    t.print();
    chai.expect(stubAdd.calledTwice).to.be.true;
  });

  it('mock print', function () {
    let store = {save() {}};
    let t = new Todos(store);
    const mock = sinon.mock(console); //都替换成了空的实现

    mock.expects('log').calledOnce;
    t.add('eat');
    t.print();
    mock.verify();
  });
});
