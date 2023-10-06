# TeX cells

For the mathematically inclined, you can use KaTeX leveraging our mathematical formula cell.

To enter an equation in TeX, start typing 'math' into the search input in the Add cell menu to display the Mathematical formula option:

<figure>
  <img
    class="screenshot"
    src="./assets/mathFormula.png" alt="A screenshot of the word 'math' typed into the search bar of an Add cell menu. The search results include the Mathematical formula option."
  />
  <figcaption>Type "math", then choose <b>Mathematical formula</b>.</figcaption>
</figure>

When you first choose the 'Mathematical formula' option, Observable will supply some boilerplate code in TeX for the math cell:

```
c = \pm\sqrt{a^2 + b^2}
```

<figure>
  <img
    class="screenshot"
    src="./assets/boilerPlateMath.png" alt="An open mathematical formula cell with code for the forumla c equals the square root of a squared plus b squared in the code section of the cell and the rendered formula above in the presentation part of the cell."
  />
  <figcaption>The mathematical formula boilerplate code rendered.</figcaption>
</figure>


Use this if helpful, or replace with your own custom inline TeX code:

```
E = mc^2
```

<figure>
  <img
    class="screenshot"
    src="./assets/eMc2.png" alt="An open mathematical formula cell with code for the formula e equals m c squared in code in the code section of the cell with the rendered scientific formula above in the presentation part of the cell."
  />
  <figcaption></figcaption>
</figure>

or more complicated blocks of TeX:

```
\Delta E^*_{00} = \sqrt{
  \Big(\frac{\Delta L'}{k_LS_L}\Big)^2 +
  \Big(\frac{\Delta C'}{k_CS_C}\Big)^2 +
  \Big(\frac{\Delta H'}{k_HS_H}\Big)^2 +
  R_T
  \frac{\Delta C'}{k_CS_C}
  \frac{\Delta H'}{k_HS_H}}
```

<figure>
  <img
    class="screenshot"
    src="./assets/longForm.png" alt="An open mathematical formula cell with a lot of TeX code in the code section and a very complicated resulting rendered formula in the presentation section."
  />
  <figcaption>A block of TeX in a mathematical formula cell.</figcaption>
</figure>

For more details, please check out [KaTeX's document website](https://katex.org/).

