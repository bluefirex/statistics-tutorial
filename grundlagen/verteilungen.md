---
pageClass: definition-page
---

# Verteilungen

Jeder Datensatz unterliegt einer sogenannten Verteilung. Sie gibt an, wie die Häufigkeiten oder andere Messwerte in deinem Datensatz vorkommen und kann symmetrisch aber auch z.B. links- oder rechtsschief sein.

### Wozu braucht man das?

Verteilungen sind immer nur theoretische Modelle, die möglichst nah an der Realität sein sollen. Es wird angenommen, dass sie nicht beobachteten Verteilungen also möglichst ähnlich sind. Ausgehend von der Annahme, um welche Verteilung es sich bei einem Merkmal handelt, werden Annahmen über die Grundgesamtheit gemacht (Konfidenzintervalle, Tests, …).

## Gaußsche Normalverteilung

$$
    \mathcal{N}(\mu, \sigma^2)
$$

| Eigenschaften         | |
|-------------          |-|
| Träger                | $\mathcal{T}_X = \mathbb{R}$  |
| Erwartungswert $E(X)$ | $\mu$                         |
| Median                | $\mu$                         |
| Modus                 | $\mu$                         |
| Varianz               | $\sigma^2$                    |


| Parameter             | |
| ---------             |-|
| Erwartungswert        | $\mu \in \mathbb{R}$      |
| Varianz               | $\sigma^2 > 0$            |

### Visualisierung

<illustration-normal-distribution />