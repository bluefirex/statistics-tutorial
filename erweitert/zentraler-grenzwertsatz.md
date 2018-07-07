---
title: Zentraler Grenzwertsatz
pageClass: definition-page
---

# Zentraler Grenzwertsatz

Die empirische Verteilungsfunktion der standardisierten Mittelwerte konvergiert für größer werdenden Umfang gegen die Standardnormalverteilung.

Diese Verteilungsfunktion sieht wie folgt aus:

$$
    Z_n = \dfrac{\bar{X} - \mu}{\sigma / \sqrt{n}} = \dfrac{1}{\sqrt{n}} \sum_{i=1}^{n}{\dfrac{X_i - \mu}{\sigma}}
$$

*Das bedeutet:* Die Verteilung des Mittelwertes einer gleichverteilten unabhängigen Zufallsvariable geht gegen die Normalverteilung mit Erwartungswert $\mu$ und Varianz $\sigma^2/n$.

::: tip Faustregel
Ab $n > 30$ sind unabhängig von der Verteilung wahrscheinlichkeitsbehaftete Aussagen über den Erwartungswert möglich.
:::