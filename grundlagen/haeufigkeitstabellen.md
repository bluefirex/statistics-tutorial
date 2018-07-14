---
pageClass: definition-page
---

# Häufigkeitstabellen

In einer Häufigkeitstabelle werden alle Ausprägungen zweier Markmale festgehalten.

## Form

Eine Häufigkeitstabelle besitzt diese Form:

<frequency-table :x-labels="['x_1', 'x_2', 'x_3']" :y-labels="['y_1', 'y_2', 'y_3']" />

Jede Tabelle enthält $2$ bis $n$ viele Gruppen pro Merkmal (hier $x$ und $y$). $xy_{23}$ bedeutet der Wert, bei dem $x = 2$ und $y = 3$ ist (hier *xy_2_3* genannt).

Jede Zeile, die Daten enthält, erhält eine zusätzliche Spalte über die Summe der jeweiligen Zeile. Jede Spalte, die Daten enthält, erhält eine zusätzliche Zeile über die Summe der jeweiligen Spalte. Zusätzlich gibt es unten rechts in der Ecke noch eine Gesamtsumme $n$ (Umfang der Stichproben). Diese Werte nennt man **Randverteilung**.

## Empirische Chancen

Chancen sind einfach nur Wahrscheinlichkeiten, die angeben, wie wahrscheinlich ein gewisses Ereignis eintreten könnte. Diese werden im Format $a:b$ angegeben, z.B. $50:50$ oder $1:5$.

### Bedingte Chance

`// TODO`


### Relative Chance

Die relative Chance sagt etwas über die Stärke eines Zusammenhangs zweier Merkmale aus. Die Chance ist von der Randverteilung (= die Werte an den Rändern der Häufigkeitstabelle) selbst unabhängig.

Die relative Chance berechnest du wie folgt:

$$
    R(A:B) = \frac{R(A)}{R(B)} = \frac{P(A) \cdot (1 - P(B))}{P(B) \cdot (1 - P(A))}
$$

*Das bedeutet:* $P(A)$ ist die Wahrscheinlichkeit, dass A eintritt. $(1 - P(B))$ ist die Wahrscheinlichkeit, dass B *nicht* eintritt. Analog für $P(B)$ und $(1 - P(A))$.

## Beispiel

::: tip Hinweis
Dieses Beispiel stammt aus Probeklausur A, WS 2016/17 von Prof. Dr. Spieß [Universität Hamburg][^1][^2].
:::

    Sie haben eine klinische Studie zur Wirksamkeit eines neuen Medikamentes zur Behandlung von Depressionen durchgeführt,indem Sie 125 Patienten mit depressiver Symptomatik zufällig in drei Gruppen eingeteilt haben. Eine Gruppe erhielt das neue Medikament, eine zweite Gruppe erhielt ein sich bereits als wirksam erwiesenes Präparat und eine dritte Gruppe erhielt ein Placebo-Präparat. Nach einer Behandlungszeit von jeweils drei Wochen ermittelten Sie die Veränderungen in den Depressionswerten der Patienten. Es ergab sich folgende Häufigkeitsverteilung:

### Häufigkeitstabelle

<frequency-table
    :x-labels="['keine Verbesserung', 'leichte Verbesserung', 'starke Verbesserung']"
    :y-labels="['altes Medikament', 'neues Medikament', 'Placebo']"
    :data="[[9, 24, 12], [3, 16, 14], [7, 25, 13]]"
    />

[^1]: Die Übungsklausur findet sich jeweils am Ende des Semesters in STiNE.
[^2]: In der Aufgabe ist von $n = 125$ die Rede, jedoch kommt in Wahrheit $n = 123$ heraus. Wir gehen also von $n = 123$ aus.

### Chance

#### Verbesserung der Symptomatik bei Gabe des neuen Medikaments

Für *$A$ = Gabe des neuen Medikaments* und *$B$ = Die Symptomatik verbessert sich*:

<br />

$$
    \begin{aligned}
        P(A) & = \frac{16 + 14}{123} \\[1em]
        P(B) & = \frac{3}{123} \\[1em]
        1 - P(A) & = 0.756 \\[0.67em]
        1 - P(B) & = 0.9756
    \end{aligned}
$$

<br />

$$
    \begin{aligned}
        R(A:B) & = \frac{P(A) \cdot (1 - P(B))}{P(B) \cdot (1 - P(A))} \\[1.5em]
        & = \frac{0.2439 \cdot 0.9756}{0.0243 \cdot 0.756} \\[1.25em]
        & = 12.9526 = 1 : 12.9526 \\[0.67em]
        & \approx 1 : 13
    \end{aligned}
$$

<br />

Es besteht also eine $1:12.9526$ relative Chance, dass sich die Symptomatik verbessert, wenn man das neue Medikament verabreicht. *Anders gesagt:* Mit dem neuen Medikament besteht eine ~13-mal so hohe Chance, dass sich die Symptomatik verbessert.

