import { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { BackButton } from "../components/backButton/BackButton";
import { CheckBox } from "../components/checkBox/CheckBox";
import { api } from "../lib/axios";

import colors from "tailwindcss/colors";

const avaliableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function NewHabit() {
  const [title, setTitle] = useState("");
  const [weekDays, setweekDays] = useState<number[]>([]);

  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setweekDays((prevState) =>
        prevState.filter((weekDay) => weekDay !== weekDayIndex)
      );
    } else {
      setweekDays((prevState) => [...prevState, weekDayIndex]);
    }
  }

  async function handleCreateNewHabit() {
    try {
      if (!title.trim() || weekDays.length === 0) {
        Alert.alert(
          "Novo Hábito",
          "Informe o nome do hábito e escolha a periodicidade!"
        );
      }

      await api.post("/habits", { title, weekDays });

      setTitle("");
      setweekDays([]);

      Alert.alert("Novo Hábito", "Hábito cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Ops!",
        "Parece que algo deu errado, não foi possivel criar o hábito."
      );
    }
  }
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}>
        <BackButton />
        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar Hábito
        </Text>

        <Text className="mt-6 text-white font-semibold text-base">
          Qual seu comprometimento?
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 mb-3 bg-zinc-800 text-white focus:border-2 focus:border-violet-600"
          placeholder="Exercicios, dormir bem, etc..."
          placeholderTextColor={colors.zinc[400]}
          onChangeText={setTitle}
          value={title}
        />

        <Text className="font-semibold mt-4 mb-3 text-white text-base">
          Qual a recorrência?
        </Text>

        {avaliableWeekDays.map((weekDay, index) => (
          <CheckBox
            key={`${weekDay}-${index}`}
            title={weekDay}
            checked={weekDays.includes(index)}
            onPress={() => handleToggleWeekDay(index)}
          />
        ))}
        <TouchableOpacity
          className="w-full h-14 flex-row items-center justify-center bg-violet-600 rounded-lg mt-6"
          activeOpacity={0.7}
          onPress={handleCreateNewHabit}>
          <Feather name="check" size={20} color={colors.white} />
          <Text className="font-semibold text-base text-white ml-2">
            Confirmar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
