---
pageClass: definition-page
---

# Häufigkeitstabellen

In einer Häufigkeitstabelle werden alle Ausprägungen zweier Markmale festgehalten.

## Form

Eine Häufigkeitstabelle besitzt diese Form:

<frequency-table :x-labels="['x_1', 'x_2', 'x_3']" :y-labels="['y_1', 'y_2', 'y_3']" />

Jede Tabelle enthält $2$ bis $n$ viele Gruppen pro Merkmal (hier $x$ und $y$). $xy_{23}$ bedeutet der Wert, bei dem $x = 2$ und $y = 3$ ist (hier *xy_2_3* genannt).

Jede Zeile, die Daten enthält, erhält eine zusätzliche Spalte über die Summe der jeweiligen Zeile. Jede Spalte, die Daten enthält, erhält eine zusätzliche Zeile über die Summe der jeweiligen Spalte. Zusätzlich gibt es unten rechts in der Ecke noch eine Gesamtsumme $n$ (Umfang der Stichproben).

## Beispiel

::: tip Hinweis
Dieses Beispiel stammt aus der Probeklausur A, WS 2016/17 von Prof. Dr. Spieß [Universität Hamburg].
:::

    Sie haben eine klinische Studie zur Wirksamkeit eines neuen Medikamentes zur Behandlung von Depressionen durchgeführt,indem Sie 125 Patienten mit depressiver Symptomatik zufällig in drei Gruppen eingeteilt haben. Eine Gruppe erhielt das neue Medikament, eine zweite Gruppe erhielt ein sich bereits als wirksam erwiesenes Präparat und eine dritte Gruppe erhielt ein Placebo-Präparat. Nach einer Behandlungszeit von jeweils drei Wochen ermittelten Sie die Veränderungen in den Depressionswerten der Patienten. Es ergab sich folgende Häufigkeitsverteilung:

<frequency-table
    :x-labels="['keine Verbesserung', 'leichte Verbesserung', 'starke Verbesserung']"
    :y-labels="['altes Medikament', 'neues Medikament', 'Placebo']"
    :data="[[9, 24, 12], [3, 16, 14], [7, 25, 13]]"
    />