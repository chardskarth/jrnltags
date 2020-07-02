" Vim syntax file " File journal
" Author: Richard Domingo

if exists("b:current_syntax")
  finish
endif

" {{ The 6 infinity stones }}

" {{ Power stone }}
syntax match jtagpower /\m\c@\(\)\>/

" {{ Reality stone }}
syntax match jtagreality /\m\c@\(\)\>/

" {{ Mind stone }}
syntax match jtagmind /\m\c@\(\)\>/

" {{ Soul stone }}
syntax match jtagsoul /\m\c@\(\)\>/

" {{ Space stone }}
syntax match jtagspace /\m\c@\(\)\>/

" {{ Time stone }}
syntax match jtagtime /\m\c@\(\)\>/

" {{ Everything-else stone... haha miscellaneous }}
syntax match jtagmisc /\m\c@\(\)\>/

syntax match Number "\d\+\(x\|k\)\?"

syntax match jdate /\d\{4}-\d\d-\d\d/
syntax match jtime /\d\d:\d\d/
syntax region entryLine start=/\d\{4}-\d\d-\d\d \d\d:\d\d/ end=/$/ contains=ALL

highlight def link jtagpower RainbowLevel0
highlight def link jtagsoul RainbowLevel5
highlight def link jtagspace RainbowLevel2
highlight def link jtagtime RainbowLevel3
highlight def link jtagreality RainbowLevel6
highlight def link jtagmind RainbowLevel4
highlight def link jtagmisc RainbowLevel7


"hi! RainbowLevel0 ctermfg=093|"ctermfg=068 guifg=#6699cc
"hi! RainbowLevel1 ctermfg=027|"ctermfg=203 guifg=#ec5f67
"hi! RainbowLevel2 ctermfg=051|"ctermfg=221 guifg=#fac863
"hi! RainbowLevel3 ctermfg=46|"ctermfg=114 guifg=#99c794
"hi! RainbowLevel4 ctermfg=190|"ctermfg=176 guifg=#c594c5
"hi! RainbowLevel5 ctermfg=208|"ctermfg=209 guifg=#f99157
"hi! RainbowLevel6 ctermfg=088|"ctermfg=073 guifg=#62b3b2
"hi! RainbowLevel7 ctermfg=201|"ctermfg=137 guifg=#ab7967
"
highlight def link jdate Identifier
highlight def link jtime Global
highlight def entryLine ctermfg=250 guifg=Gray

let b:current_syntax = "jrnl"
