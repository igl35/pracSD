import expect from 'unexpected'
import NPI from '../src/NPI'

describe('NPI', () => {

  describe('instantiation', () => {

    it('should have expected properties', () => {

      const npi = new NPI('1')

      expect(npi, 'to have own properties', [
        'raw',
        'npi',
        'checkDigit'
      ])

      expect(npi, 'to have properties', [
        'isValid',
        'toString'
      ])

      expect(npi.toString, 'to be a', 'function')
    })

    it('should set raw value', () => {

      const test = '123'
      const npi = new NPI(test)

      expect(npi.raw, 'to be a string').and(expect.it('to be', test))
    })

    it('should set check digit to the last character', () => {

      const npi = new NPI('123')

      expect(npi.checkDigit, 'to be a number').and(expect.it('to be', 3))
    })
  })

  describe('toString', () => {

    it('should return a string', () => {

      const npi = new NPI('1')

      expect(npi.toString(), 'to be a', 'string')
    })
  })

  describe('isValid', () => {

    describe('for unprefixed NPIs which are valid', () => {

      it('should return true', () => {

        const string = '1234567893'
        const npi = new NPI(string)

        expect(npi.isValid, 'to be', true)
      })
    })

    describe('for prefixed NPIs which are valid', () => {

      it('should return true', () => {

        const string = '808401234567893'
        const npi = new NPI(string)

        expect(npi.isValid, 'to be', true)
      })
    })

    describe('for invalid NPIs', () => {

      it('should be false', () => {

        const string = '1234567891'
        const npi = new NPI(string)

        expect(npi.isValid, 'to be', false)
      })
    })
  })
})
