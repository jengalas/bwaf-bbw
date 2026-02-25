---
layout: bbw-block-version
permalink: /built-by-women
title: Built By Women
navCategory: Programs
page_blocks:
  - _block_name: text_block
    text: >-
      Beverly Willis Architecture Foundation creates opportunities with national
      attention to demonstrate the breadth of achievement in the building
      industries by women at the highest levels. Through a juried mapping
      project, Built by Women recognizes the significant but often overlooked
      work of women architects, landscape architects, urban designers,
      engineers, contractors, and developers in selected cities. Following
      previous programs in Manhattan and Los Angeles, the 2026 Built by Women
      map will center on New York City to discover new and innovative women-led
      projects throughout the five boroughs and explore the important ways that
      work by women shapes the built environment.


      Stay tuned for the announcement of the completed 2026 Built by Women: New
      York City map!
    show_lefthand_link: true
    lefthand_link_text: 'Become a sponsor of the program '
    lefthand_link_url: https://bwaf.netlify.app/support
_structures:
  page_blocks:
    values:
      - label: Text Block
        value:
          _block_name: text_block
          text: ''
          show_lefthand_link: false
          lefthand_link_text: ''
          lefthand_link_url: ''
_inputs:
  page_blocks:
    type: array
    options:
      structures: page_blocks
  page_blocks[*].text:
    type: markdown
    label: Main Text
  page_blocks[*].show_lefthand_link:
    type: checkbox
    label: Show Lefthand Link?
  page_blocks[*].lefthand_link_text:
    type: text
    label: Left Link Text
  page_blocks[*].lefthand_link_url:
    type: text
    label: Left Link URL
---
