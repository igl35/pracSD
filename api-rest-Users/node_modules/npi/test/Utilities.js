import expect from 'unexpected'
import Utilities from '../src/Utilities'

/** @test {Utilities} */
describe('Utilities', () => {

  /** @test {Utilities#parseInteger} */
  describe('parseInteger', () => {

    it('should return a number for a number', () => {

      expect(Utilities.parseInteger(1), 'to be a number')
      expect(Utilities.parseInteger(2), 'to be a number')
    })

    it('should return a number for a string', () => {

      expect(Utilities.parseInteger('1'), 'to be a number')
      expect(Utilities.parseInteger('2'), 'to be a number')
    })

    it('should throw error for things that cant be cast to numbers', () => {

      expect(() => { Utilities.parseInteger('a') }, 'to throw', 'Not a number')
      expect(() => { Utilities.parseInteger('b') }, 'to throw', 'Not a number')
    })
  })

  /** @test {Utilities#doubleInteger} */
  describe('doubleInteger', () => {

    it('should be zero when given zero', () => {

      expect(Utilities.doubleInteger(0), 'to be', 0)
    })

    it('should double the value of an integer', () => {

      expect(Utilities.doubleInteger(1), 'to be', 2)
      expect(Utilities.doubleInteger(2), 'to be', 4)
    })
  })

  /** @test {Utilities#sumDigits} */
  describe('sumDigits', () => {

    it('should be zero when given zero', () => {

      expect(Utilities.sumDigits(0), 'to be', 0)
    })

    it('should sum the integers digits', () => {

      expect(Utilities.sumDigits(1), 'to be', 1)
      expect(Utilities.sumDigits(10), 'to be', 1)
      expect(Utilities.sumDigits(11), 'to be', 2)
      expect(Utilities.sumDigits(14), 'to be', 5)
      expect(Utilities.sumDigits(18), 'to be', 9)
    })
  })
})
