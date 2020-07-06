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

highlight jtagpower ctermfg=099
highlight jtagsoul ctermfg=208
highlight jtagspace ctermfg=087
highlight jtagtime ctermfg=046
highlight jtagreality ctermfg=196
highlight jtagmind ctermfg=190
highlight jtagmisc ctermfg=201

highlight def link jdate Identifier
highlight def link jtime Global
highlight def entryLine ctermfg=250 guifg=Gray

let b:current_syntax = "jrnl"
