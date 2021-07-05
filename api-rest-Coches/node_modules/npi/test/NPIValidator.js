import unexpected from 'unexpected'
import unexpectedsinon from 'unexpected-sinon'
import sinon from 'sinon'
import stream from 'stream'
import NPIValidator from '../src/NPIValidator'

const expect = unexpected.clone()
.use(unexpectedsinon)

describe('NPIValidator', () => {

  let validator

  beforeEach(() => {
    validator = new NPIValidator()
  })

  it('should instatiate as intended', () => {

    const Transform = stream.Transform
    expect(validator, 'to be a', Transform).and(expect.it('to be a', NPIValidator))
  })

  describe('_transform', () => {

    it('should call the callback', () => {
      const callback = sinon.spy()
      validator._transform('1', 'utf8', callback)
      expect(callback, 'was called')
    })
  })
})
