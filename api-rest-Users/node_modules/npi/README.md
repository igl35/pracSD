# Usage #

## NPI ##
```
import {NPI} from 'npi'

NPI(process.stdin, process.stdout)
```

## NPIValidator ##
```
import split from 'split'
import {NPIValidator} from 'npi'

const validator = new NPIValidator()

process.stdin
.pipe(split())
.pipe(validator)
.pipe(process.stdout)
```
