---
layout: bbw
permalink: /built-by-women
title: Built By Women
navCategory: Programs
page_blocks:
  - _block_name: text_block
    text: >
      This is the main content of the text block.
    show_left_header: false
    left_header: ""
_structures:
  page_blocks:
    values:
      - label: Text Block
        value:
          _block_name: text_block
          text: ""
          show_left_header: false
          left_header: ""

_inputs:
  page_blocks:
    type: array
    options:
      structures: page_blocks

  page_blocks[*].text:
    type: markdown
    label: Main Text

  page_blocks[*].show_left_header:
    type: checkbox
    label: Show Left Header?

  page_blocks[*].left_header:
    type: text
    label: Left Header    
---
